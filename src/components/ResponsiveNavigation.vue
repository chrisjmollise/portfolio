<template>
  <nav>
    <ul :style="{ background: background || '#333' }" ref="nav">
      <figure class="image-logo" @click="toggleNav">
        <img :src="imagePath" height="40px" width="40px" />
      </figure>
      <li
        v-for="(link, index) in navLinks"
        :key="index"
        @mouseenter="$event.currentTarget.style.background = hoverBackground || '#999'"
        @mouseleave="$event.currentTarget.style.background = background || '#333'"
      >
        <router-link
          :to="link.path"
          :style="{ color: linkColor || '#DDD' }"
        >
          {{ link.text }}
          <i :class="link.icon" />
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['navLinks', 'background', 'linkColor', 'hoverBackground', 'imagePath'],
  methods: {
    toggleNav() {
      const nav = this.$refs.nav.classList;
      if (nav.contains('active')) {
        nav.remove('active');
      } else {
        nav.add('active');
      }
    },
  },
};
</script>

<style scoped lang="scss">
  nav {
    height: 60px;
    width: 100%;
    ul {
      z-index: 1;
      display: flex;
      height: 100%;
      align-items: center;
      margin-block-start: 0;
      margin-block-end: 0;
      padding-inline-start: 0;
      box-shadow: 2px 2px 2px #CCC;

      figure {
        cursor: pointer;
        margin-right: 10px;
      }

      a {
        text-decoration: none;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
      }

      i {
        margin-right: 10px;
        font-size: 22px;
      }

      li {
        list-style-type: none;
        padding: 10px 20px;
      }
    }
  }

  @media screen and (max-width: 759px) {
    nav {
      height: 0px;
      ul {
        position: fixed;
        width: 300px;
        padding-block: 60px;
        flex-direction: column;
        left: -240px;
        transition: 300ms ease all;
        top: 0px;

        &.active {
          left: 0px;
        }

        figure {
          position: fixed;
          top: 8px;
          left: 0px;
        }

        li {
          width: 100%;
          padding-left: 0;
          padding-right: 0;
        }

        a {
          flex-direction: row;
          margin-left: 20px;
          justify-content: space-between;
          margin-right: 13px;
        }
      }
    }
  }
</style>
