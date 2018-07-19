import { InjectionToken } from '@angular/core';
import { Signal } from '@gamestdio/signals';

export interface IProfile {
  nickname: string;
  picture: string;
}

export interface IPlayer {
  id: string;
  idx: string;
  color: string;
  profile: IProfile;
}

export interface IRoomState<T> {
  players: IPlayer[];
  isReady: boolean;

  bgio: {
    G: T,
    ctx: {
      gameover: any
    }
  };
}

export interface IRoom<T = any> {
  id: string;
  sessionId: string;
  name: string;
  state: IRoomState<T>;
  onLeave: Signal;

  send(message: any): void;
  leave(): void;
}

export const ROOM_TOKEN = new InjectionToken<IRoom>('ROOM');

export const GAME_TOKEN = new InjectionToken<any>('GAME');
