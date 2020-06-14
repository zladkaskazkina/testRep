<template>
  <div class="container">
    <Joke
      v-for="(joke, index) in jokes"
      :text="joke.text"
      :upLikes="joke.upLikes"
      :downLikes="joke.downLikes"
      :user="joke.user"
      :key="index"
    />
  </div>
</template>

<script>
import Joke from "./Joke.vue";

export default {
  name: "App",
  components: {
    Joke: Joke,
  },
  data() {
    return {
      jokes: [
        {
          text: `The secret service isn't allowed to yell "Get down!" anymore when the president is about to be attacked. Now they have to yell "Donald, duck!"`,
          upLikes: 13,
          downLikes: 24,
          user: "user01",
        },
        {
          text: `Why did the invisible man turn down the job offer? He couldn't see himself doing it.`,
          upLikes: 50,
          downLikes: 10,
          user: "user02",
        },
        {
          text: `The secret service isn't allowed to yell "Get down!" anymore when the president is about to be attacked. Now they have to yell "Donald, duck!"`,
          upLikes: 13,
          downLikes: 24,
          user: "user03",
        },
        {
          text: `The secret service isn't allowed to yell "Get down!" anymore when the president is about to be attacked. Now they have to yell "Donald, duck!"`,
          upLikes: 13,
          downLikes: 24,
          user: "user04",
        },
        {
          text: `The secret service isn't allowed to yell "Get down!" anymore when the president is about to be attacked. Now they have to yell "Donald, duck!"`,
          upLikes: 13,
          downLikes: 24,
          user: "user05",
        },
      ],
    };
  },
};
</script>
