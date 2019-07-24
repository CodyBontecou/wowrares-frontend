<template>
  <div>
    <v-app dark>
    <v-toolbar>
      <v-menu offset-y>
        <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
        <v-container
          style="height: 450px; padding: 0;"
          class="scroll-y"
        >
          <v-list>
            <v-list-tile
              v-for="(zone, index) in zones"
              :key="index"
              @click="mobsInfo(zone)"
            >
              <v-list-tile-title>{{zone.name}}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-container>
      </v-menu>
      <!--      Toolbar section that will always show-->
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Wow</span>
        <span>rares</span>
      </v-toolbar-title>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">{{ zone.name }}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-container grid-list-md text-xs-center>
      <v-layout
        row
        wrap
        class="pa-3 project">
        <v-flex xs12 md9 v-if="zone">
          <v-img
            :src="zone.image"
            alt=""
          >
            <div v-show="active">{{ mob.name }}<br>{{ mob.level }}<br>{{ mob.health }}</div>
            <v-layout column fill-height class="lightbox white--text">
              <v-flex shrink>
                <div v-for="(mob, index) in mobs" :key="index">
                  <v-img
                    src="https://classicdb.ch/templates/wowhead/images/map-pin-yellow.png"
                    alt=""
                    height="11px"
                    width="11px"
                    :style="{
                              top: mob.y_coordinate + '%',
                              left: mob.x_coordinate + '%',
                              position: 'absolute'
                    }"
                    @mouseover=mouseOver(mob)
                    @mouseleave=mouseOff()
                  >
                  </v-img>
                </div>
              </v-flex>
            </v-layout>
          </v-img>
        </v-flex>
        <v-flex x12 md3>
          <v-container
            style="height: 550px"
            class="scroll-y"
          >
            <v-expansion-panel>
              <v-expansion-panel-content expand v-for="(mob, index) in mobs" :key="index">
                <div slot="header">
                  <v-card flat>
                    <v-layout>
                      <v-flex>
                        <div class="caption grey--text">Name</div>
                        <div>{{ mob.name }}</div>
                      </v-flex>
                      <v-flex>
                        <div class="caption grey--text">Level</div>
                        <div>{{ mob.level }}</div>
                      </v-flex>
                      <!--                      <v-flex xs8 md4 v-for="(item, index) in items" :key="index">-->
                      <!--                        <v-img-->
                      <!--                          :src=item.image-->
                      <!--                          :lazy-src=item.lazy_image-->
                      <!--                          max-height="40px"-->
                      <!--                          max-width="40px"-->
                      <!--                          @mouseover=hoverItem(item)-->
                      <!--                        >-->
                      <!--                        </v-img>-->
                      <!--                      </v-flex>-->
                    </v-layout>
                  </v-card>
                </div>
                <v-card flat>
                  <v-layout
                    row
                    wrap
                    class="project">
                    <v-flex xs6 align-self-center>
                      <v-img
                        :src="`${mob.image}`"
                        alt=""></v-img>
                    </v-flex>
                    <v-flex align-self-center>
                      <div class="caption grey--text">Damage</div>
                      <div>{{ mob.damage }}</div>
                    </v-flex>
                    <v-flex align-self-center>
                      <div class="caption grey--text">Health</div>
                      <div>{{ mob.health }}</div>
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-container>
        </v-flex>
        <Nuxt />
      </v-layout>
    </v-container>

    <v-footer ma-3>
      <a href="https://www.patreon.com/bePatron?u=20293765" data-patreon-widget-type="become-patron-button">Become a
        Patron!</a>
      <script async src="https://c6.patreon.com/becomePatronButton.bundle.js"></script>
    </v-footer>
  </v-app>
  </div>
</template>

<script>
  export default {
    computed: {
      active() {
        return this.$store.state.active
      },
      zone() {
        return this.$store.state.zone
      },
      zones() {
        return this.$store.state.zones
      },
      mob() {
        return this.$store.state.mob
      },
      mobs() {
        return this.$store.state.mobs
      },
      items() {
        return this.$store.state.items
      }
    },
    async fetch({store}) {
      await store.dispatch('fetchAllZones');
    },
    methods: {
      log() {
        console.log(this.$store.state);
      },
      async mobsInfo(zone) {
        this.$store.commit('setZone', zone);
        await this.$store.dispatch('fetchMobs', zone);
      },
      mouseOver(mob) {
        this.$store.commit('setMob', mob);
        this.$store.commit('changeActive');
      },
      mouseOff() {
        this.$store.commit('changeActive');
      },
      hoverItem(item) {
        console.log(item.name);
      }
    }
  }
</script>
