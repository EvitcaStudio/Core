import { Tween } from './submodules/Tween/dist/tween.min.mjs';
import { Resonance } from './submodules/Resonance/dist/resonance.min.mjs';
import { Collector } from './submodules/Collector/dist/collector.min.mjs';
import { Chronos } from './submodules/Chronos/dist/chronos.min.mjs';
import { Utils } from './submodules/Utils/dist/utils.min.mjs';
import { StateManager, State } from './submodules/StateManager/dist/state-manager.min.mjs';
import { Pulse } from './submodules/Pulse/dist/pulse.min.mjs';
import { Group } from './submodules/Group/dist/group.min.mjs';

class CoreEngine {
    /**
     * The Group module is a powerful utility designed to simplify the manipulation of collections in JavaScript. It enables you to treat a set of elements as a single unit, allowing you to perform actions on the entire group without the need for cumbersome loops.
     * @site https://github.com/EvitcaStudio/Group
     */
    Group = Group;
    /**
     * Tween is a small library for creating tweening animations in JavaScript. It allows you to smoothly animate an object's properties from one value to another over a specified duration using easing functions.
     * @site https://github.com/EvitcaStudio/Tween
     */
    Tween = Tween;
    /**
     * A fully flexible interval/timer with chainable API
     * @site https://github.com/EvitcaStudio/Chronos
     */
    Chronos = Chronos;
    /**
     * A class representing a state machine manager.
     * @site https://github.com/EvitcaStudio/StateManager
     */
    StateManager = StateManager;
    /**
     * A class representing a state.
     * @site https://github.com/EvitcaStudio/StateManager
     */
    State = State;
    /**
     * A plugin that will easily allow you to play sounds and control them.
     * @site https://github.com/EvitcaStudio/Resonance
     */
    resonance = Resonance;
    /**
     * This plugin gives you an easy and beneficial way to reuse objects, as well as slow down the garbage collector.
     * @site https://github.com/EvitcaStudio/Collector
     */
    collector = Collector;
    /**
     * A small plugin full of useful things.
     * @site https://github.com/EvitcaStudio/Utils
     */
    utils = Utils;
    /**
     * A plugin that allows you to listen to events that happen on diobs. Have your code called alongside an event!
     * @site https://github.com/EvitcaStudio/Pulse
     */
    pulse = Pulse;
    /**
     * The version of the module.
     */
    version = "VERSION_REPLACE_ME";
}

export const Core = new CoreEngine();

const pluginName = `Core@v${Core.version}`;
const backgroundColor = '#274472'; // Dark navy blue
const color = '#fff'; // White text color
const fontFamily = 'Arial, sans-serif';
const borderLeft = '5px solid #BFD7ED';

const logStyle = `
  background-color: ${backgroundColor};
  color: ${color};
  padding: 6px 15px;
  font-family: ${fontFamily};
  font-weight: bold;
  font-style: italic;
  border-left: ${borderLeft};
  text-shadow: rgb(0, 0, 0) 2px 0px 0px, rgb(0, 0, 0) 1.75517px 0.958851px 0px, rgb(0, 0, 0) 1.0806px 1.68294px 0px, rgb(0, 0, 0) 0.141474px 1.99499px 0px, rgb(0, 0, 0) -0.832294px 1.81859px 0px, rgb(0, 0, 0) -1.60229px 1.19694px 0px, rgb(0, 0, 0) -1.97998px 0.28224px 0px, rgb(0, 0, 0) -1.87291px -0.701566px 0px, rgb(0, 0, 0) -1.30729px -1.5136px 0px, rgb(0, 0, 0) -0.421592px -1.95506px 0px, rgb(0, 0, 0) 0.567324px -1.91785px 0px, rgb(0, 0, 0) 1.41734px -1.41108px 0px, rgb(0, 0, 0) 1.92034px -0.558831px 0px;
`;

console.log(`%c${pluginName}`, logStyle, 'https://github.com/EvitcaStudio/Core');