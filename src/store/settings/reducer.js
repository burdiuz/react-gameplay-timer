import createReducer from '../createReducer';

const createThreshold = (startTime = 0, color = 0xff0000) => ({
  startTime,
  style: {
    color,
  }
});

const initialState = () => ({
  vibrate: true,
  thresholds: [
    createThreshold(0, 0xFF6600FF),
    createThreshold(900000, 0xFFCC00FF),
    createThreshold(3600000, 0x66CC00FF),
  ],
});

export default createReducer(module.exports, initialState());
