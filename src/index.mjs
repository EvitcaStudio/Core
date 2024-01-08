import { Tween } from './submodules/Tween/dist/tween.min.mjs';
import { Resonance } from './submodules/Resonance/dist/resonance.min.mjs';
import { Collector } from './submodules/Collector/dist/collector.min.mjs';
import { Chronos } from './submodules/Chronos/dist/chronos.min.mjs';
import { Utils } from './submodules/Utils/dist/utils.min.mjs';
import { StateManager, State } from './submodules/StateManager/dist/state-manager.min.mjs';
import { Pulse } from './submodules/Pulse/dist/pulse.min.mjs';

class CoreEngine {
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
}

export const Core = new CoreEngine();