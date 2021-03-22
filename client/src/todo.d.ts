import { SnotifyService } from 'vue-snotify/SnotifyService';

declare module 'vue/types/vue' {
  interface Vue {
    $snotify: SnotifyService;
  }
}

export interface Todo {
  _id?: string;
  title: string;
  isCompleted: boolean;
}
