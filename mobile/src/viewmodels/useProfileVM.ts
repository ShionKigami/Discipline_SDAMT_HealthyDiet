import { create } from 'zustand';
import { database } from '../database';
import { ProfileModel } from '../database/models/ProfileModel';

interface ProfileState {
  profile: ProfileModel | null;
  load: () => Promise<void>;
  save: (data: any) => Promise<void>;
}

export const useProfileVM = create<ProfileState>((set) => ({
  profile: null,
  load: async () => {
    const collection = database.get<ProfileModel>('profiles');
    const all = await collection.query().fetch();
    set({ profile: all[0] || null });
  },
  save: async (data) => {
    const collection = database.get<ProfileModel>('profiles');
    await database.write(async () => {
      const all = await collection.query().fetch();
      if (all[0]) {
        await all[0].update((p: any) => Object.assign(p, data));
      } else {
        await collection.create((p: any) => Object.assign(p, data));
      }
    });
  },
}));
