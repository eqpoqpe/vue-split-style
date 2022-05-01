import HelloWorld from './components/hello/HelloWorld.vue';

export default function App() {
  return {
    components: {
      HelloWorld,
    },
    data() {
      return {
        text: '',
        ready: '',
      };
    },
    mounted() {
      this.$refs.input.focus();
    },
    methods: {
      sent() {
        this.ready = this.text;
      },
    },
    watch: {
      ready() {},
    },
  };
}
