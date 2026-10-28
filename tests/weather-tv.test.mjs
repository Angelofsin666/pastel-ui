import test from 'node:test';
import assert from 'node:assert/strict';
import {weatherView,dailyForecast} from '../src/weather-model.js';
import {tvView,tvCan,TV_FEATURE} from '../src/tv-model.js';

test('weather uses actual state, preserves zero values and excludes missing forecast data',()=>{
 const hass={states:{'weather.home':{state:'sunny',attributes:{temperature:0,humidity:0,wind_speed:0,temperature_unit:'°C'}}},config:{unit_system:{temperature:'°C'}}};
 assert.deepEqual(weatherView(hass,'weather.home').condition,['Sereno','mdi:weather-sunny']);
 assert.equal(weatherView(hass,'weather.home').temperature,0);
 assert.equal(weatherView(hass,'weather.home').humidity,0);
 assert.equal(dailyForecast({forecast:[{datetime:'2026-10-28T10:00:00Z',temperature:0,condition:'rainy',templow:-2},{datetime:'2026-10-29T10:00:00Z',temperature:null}]}).length,1);
 hass.states['weather.home'].state='unavailable';
 assert.equal(weatherView(hass,'weather.home').temperature,null);
});

test('TV controls require both device features and available Home Assistant services',()=>{
 const hass={states:{'media_player.tv':{state:'playing',attributes:{supported_features:TV_FEATURE.TURN_OFF|TV_FEATURE.VOLUME_SET|TV_FEATURE.SELECT_SOURCE,volume_level:.28,source:'TV',source_list:['TV','HDMI 1']}}},services:{media_player:{turn_off:{},volume_set:{},select_source:{},media_pause:{}}}};
 const view=tvView(hass,'media_player.tv');
 assert.equal(view.volume,28);
 assert.equal(tvCan(hass,view,TV_FEATURE.TURN_OFF,'turn_off'),true);
 assert.equal(tvCan(hass,view,TV_FEATURE.PAUSE,'media_pause'),false);
 assert.equal(tvCan(hass,view,TV_FEATURE.SELECT_SOURCE,'select_source'),true);
 assert.equal(tvCan(hass,view,TV_FEATURE.TURN_ON,'turn_on'),false);
 hass.states['media_player.tv'].state='unavailable';
 assert.equal(tvCan(hass,tvView(hass,'media_player.tv'),TV_FEATURE.TURN_OFF,'turn_off'),false);
});
