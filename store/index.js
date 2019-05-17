export const state = () => ({
  active: false,
  zone: '',
  zones: [],
  mob: { name: 'Default' },
  mobs: [],
  items: [
    {
      drop_rate: '30',
      i_level: '15',
      image: 'https://classicdb.ch/images/icons/large/inv_sword_27.jpg',
      lazy_image: 'https://classicdb.ch/images/icons/small/inv_sword_27.jpg',
      name: 'Small Sword',
      required_level: '12',
      type: 'Consumable'
    },
    {
      drop_rate: '1',
      i_level: '10',
      image: 'https://classicdb.ch/images/icons/large/inv_sword_27.jpg',
      lazy_image: 'https://classicdb.ch/images/icons/small/inv_sword_27.jpg',
      name: 'med Sword',
      required_level: '11',
      type: 'Cloth Armor'
    },
    {
      drop_rate: '12',
      i_level: '56',
      image: 'https://classicdb.ch/images/icons/large/inv_sword_27.jpg',
      lazy_image: 'https://classicdb.ch/images/icons/small/inv_sword_27.jpg',
      name: 'LARGE Sword',
      required_level: '50',
      type: 'Weapon'
    },
    {
      drop_rate: '1',
      i_level: '62',
      image: 'https://classicdb.ch/images/icons/large/inv_sword_27.jpg',
      lazy_image: 'https://classicdb.ch/images/icons/small/inv_sword_27.jpg',
      name: 'SWORD',
      required_level: '60',
      type: 'Weapon'
    },
  ]
});

export const actions = {
  async fetchAllZones({commit}) {
    let zones = await this.$axios.$get(`zones`);
    commit('setZones', zones)
  },
  async fetchMobs({commit}, zone) {
    let mobs = await this.$axios.$get(`mobs/?zone__name=${zone.name}`);
    commit('setMobs', mobs)
  }
};

export const mutations = {
  setZone(state, zone) {
    state.zone = zone;
  },
  setZones(state, zones) {
    // TODO: Sort zones so that navigation is alphabetical
    state.zones = zones
  },
  setMob(state, mob){
    state.mob = mob
  },
  setMobs(state, mobs) {
    state.mobs = mobs;
  },
  changeActive(state) {
    state.active = !state.active;
  }
};
