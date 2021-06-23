<template>
  <div class="hello">
    <p>Hello <span class="white">World</span></p>
    <p class="greeting" v-for="(friend, index) in randomFriends" :key="index">
      <span
        class="name"
        :style="{ color: friend.color, background: friend.contrast }"
      >
        {{ friend.friend }}
      </span>
      <span class="phrase">
        {{ friend.greeting }}
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      friends: [
        { friend: "ray", greeting: "hi", color: "red", contrast: "black" },
        {
          friend: "oscar",
          greeting: "bye",
          color: "orange",
          contrast: "white",
        },
        {
          friend: "Gwen",
          greeting: "good morning",
          color: "green",
          contrast: "pink",
        },
        {
          friend: "Bob",
          greeting: "good day",
          color: "blue",
          contrast: "yellow",
        },
        {
          friend: "Marie",
          greeting: "see you later",
          color: "magenta",
          contrast: "navy",
        },
      ],
    };
  },

  computed: {
    randomFriends() {
      let random = this.friends;
      return random.sort(() => Math.random() - 0.5);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 200px;
  margin: auto;
}
.greeting {
  display: flex;
  justify-content: space-between;
}
.phrase {
  text-align: left;
}
.name {
  font-size: 1rem;
  padding: 0.5rem;
}
.white {
  background-color: black;
  color: #fff;
}
</style>
