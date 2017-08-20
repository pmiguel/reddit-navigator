import NearestStrategy from './NearestStrategy';
import SequentialStrategy from './SequentialStrategy';

function StrategyFactory(strategyName, rootContainer) {
    console.debug('StrategyFactory', strategyName, rootContainer);
    switch(strategyName) {
        case 'NEAREST':
            return new NearestStrategy(rootContainer);
        case 'SEQUENTIAL':
            return new SequentialStrategy(rootContainer);
        default:
            return NearestStrategy(rootContainer);
    }
}

export default {
    Nearest: NearestStrategy,
    Sequential: SequentialStrategy,
    factory: StrategyFactory,
}