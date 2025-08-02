// rgkl_prototype_a_min.ts

interface GameConfig {
  title: string;
  version: string;
  screenWidth: number;
  screenHeight: number;
  framesPerSecond: number;
  debugMode: boolean;
}

interface MonitorConfig {
  monitorWidth: number;
  monitorHeight: number;
  monitorRefreshRate: number;
}

interface InputConfig {
  keyboard: {
    up: string;
    down: string;
    left: string;
    right: string;
    jump: string;
    attack: string;
  };
  gamepad: {
    up: number;
    down: number;
    left: number;
    right: number;
    jump: number;
    attack: number;
  };
}

interface GamePrototypeConfig {
  game: GameConfig;
  monitor: MonitorConfig;
  input: InputConfig;
}

const config: GamePrototypeConfig = {
  game: {
    title: 'Minimalist Game Prototype',
    version: '0.1.0',
    screenWidth: 800,
    screenHeight: 600,
    framesPerSecond: 60,
    debugMode: true,
  },
  monitor: {
    monitorWidth: 1920,
    monitorHeight: 1080,
    monitorRefreshRate: 144,
  },
  input: {
    keyboard: {
      up: 'ArrowUp',
      down: 'ArrowDown',
      left: 'ArrowLeft',
      right: 'ArrowRight',
      jump: 'Space',
      attack: 'Shift',
    },
    gamepad: {
      up: 12,
      down: 13,
      left: 14,
      right: 15,
      jump: 0,
      attack: 1,
    },
  },
};

export default config;