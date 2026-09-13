const {test} = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const source = fs.readFileSync(require('node:path').join(__dirname, '../src/legacy/pastel-lights-card.js'), 'utf8').replace(/^import.*$/gm, '').replace(/const \{ LitElement, html, css \} = await import\([\s\S]*?\);/, '').replace(/const \{ unsafeHTML \} = await import\([\s\S]*?\);/, '');
function setup() {
  const timers = new Map(), listeners = new Map(), calls = [], events = [];
  let next = 0, Card;
  const context = {LitElement: class {disconnectedCallback() {} dispatchEvent(e) {events.push(e)}}, html() {}, css() {}, Event: class {constructor(type){this.type=type}}, registerLegacy(name, cls){if(name==='pastel-lights-card') Card=cls}, window: {addEventListener(n,f){listeners.set(n,f)},removeEventListener(n,f){if(listeners.get(n)===f)listeners.delete(n)}}, setTimeout(f){timers.set(++next,f);return next}, clearTimeout(n){timers.delete(n)}};
  vm.runInNewContext(source,context);
  const c=new Card(); c.config={entities:['light.test']}; c.hass={states:{'light.test':{state:'on',attributes:{brightness:128}}},callService(...args){calls.push(args)}};
  const ev=(extra={})=>({pointerId:1,button:0,isPrimary:true,clientX:50,clientY:50,stopPropagation(){},preventDefault(){},...extra});
  const fire=(name,e=ev())=>listeners.get(name)?.(e);
  const hold=()=>{for(const f of [...timers.values()])f();timers.clear()};
  const track={getBoundingClientRect:()=>({left:0,width:100}),style:{setProperty(){},removeProperty(){}},setAttribute(){}};
  return {c,calls,events,ev,fire,hold,timers,listeners,track};
}
test('tap toggles once',()=>{const {c,ev,calls,events}=setup();c._onPointerDown('light.test',ev());c._onPointerUp('light.test',ev());assert.equal(calls.length,1);assert.equal(events.length,0)});
test('hold opens more-info without toggling',()=>{const {c,ev,calls,events,hold}=setup();c._onPointerDown('light.test',ev());hold();c._onPointerUp('light.test',ev());assert.equal(calls.length,0);assert.equal(events[0].type,'hass-more-info')});
for(const delta of [{clientY:80},{clientX:80}]) test(`movement cancels hold and toggle ${JSON.stringify(delta)}`,()=>{const {c,ev,calls,events,hold}=setup();c._onPointerDown('light.test',ev());c._onPointerMove(ev(delta));hold();c._onPointerUp('light.test',ev());assert.equal(calls.length+events.length,0)});
test('canceled pointer cannot trigger popup or toggle',()=>{const {c,ev,calls,events,hold}=setup();c._onPointerDown('light.test',ev());c._cancelPress();hold();c._onPointerUp('light.test',ev());assert.equal(calls.length+events.length,0)});
test('release-only movement is rejected',()=>{const {c,ev,calls}=setup();c._onPointerDown('light.test',ev());c._onPointerUp('light.test',ev({clientY:90}));assert.equal(calls.length,0)});
test('secondary button and unmatched release ignored',()=>{const {c,ev,calls,hold,events}=setup();c._onPointerDown('light.test',ev({button:2}));hold();c._onPointerUp('light.test',ev());c._onPointerDown('light.test',ev());c._onPointerUp('light.test',ev({pointerId:2}));assert.equal(calls.length+events.length,0)});
test('header scroll does not toggle all; header tap does',()=>{const {c,ev,calls}=setup();c._onPointerDown(null,ev());c._onPointerMove(ev({clientY:90}));c._onPointerUp(null,ev());assert.equal(calls.length,0);c._onPointerDown(null,ev());c._onPointerUp(null,ev());assert.equal(calls[0][1],'turn_off')});
for(const mode of ['vertical','cancel','disconnect'])test(`slider ${mode} sends no command and removes listeners`,()=>{const {c,ev,track,fire,calls,listeners}=setup();c._onSliderPointerDown('light.test',ev({currentTarget:track}));assert.equal(calls.length,0);if(mode==='vertical')fire('pointermove',ev({clientY:90}));else if(mode==='cancel')fire('pointercancel');else c.disconnectedCallback();fire('pointerup');assert.equal(calls.length,0);assert.equal(listeners.size,0)});
test('slider horizontal drag commits once on release',()=>{const {c,ev,track,fire,calls,listeners}=setup();c._onSliderPointerDown('light.test',ev({currentTarget:track}));fire('pointermove',ev({clientX:70}));fire('pointermove',ev({clientX:90}));assert.equal(calls.length,0);fire('pointerup',ev({clientX:90}));assert.equal(calls.length,1);assert.equal(calls[0][2].brightness_pct,90);assert.equal(listeners.size,0)});
test('slider tap commits on release',()=>{const {c,ev,track,fire,calls}=setup();c._onSliderPointerDown('light.test',ev({currentTarget:track}));fire('pointerup');assert.equal(calls[0][2].brightness_pct,50)});
test('keyboard activation and brightness bounds',()=>{const {c,ev,calls}=setup();c._onKeyDown('light.test',ev({key:'Enter'}));c._onSliderKeyDown('light.test',ev({key:'End'}));assert.equal(calls[0][1],'toggle');assert.equal(calls[1][2].brightness_pct,100)});
