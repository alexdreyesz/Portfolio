declare module 'three/examples/jsm/loaders/DRACOLoader.js' {
    import { LoadingManager } from 'three';
    import { Loader } from 'three';
  
    export class DRACOLoader extends Loader {
      constructor(manager?: LoadingManager);
      setDecoderPath(path: string): this;
      setDecoderConfig(config: object): this;
      setWorkerLimit(workerLimit: number): this;
      preload(): void;
      load(url: string, onLoad: (geometry: import('three').BufferGeometry) => void, onProgress?: (event: ProgressEvent) => void, onError?: (event: ErrorEvent) => void): void;
      dispose(): void;
    }
  }
  