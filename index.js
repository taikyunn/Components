// component登録方法
// これはグローバル登録の方法
// どのインスタンスでも仕様できる
Vue.component('my-component', {
  // component内ではdataは関数である必要がある
  data: function(){
    // 値をreturnすることで値を表示することができる
    // 仮にobjectのままだと情報を共有してしまう。(値を動的にデータを設定できなくなる)
    // これは仕様である。だからコンポーネントないのdataは関数にすること。
    // 下記ボタンではそれぞれで値を保持することができる。
    return {
      number: 12,
      name: 'たなか',
    }
  },
  template : '<p>いいね{{number}}{{name}}<button @click="increment">+1</button></p>',
  methods: {
    increment: function() {
      return this.number += 1
    }
  },
})

// コンポーネントのローカル登録
// 全てのインスタンスではなく特定のインスタンス内で使われる
// 変数にグローバルと同じ形で返したい値（オブジェクト）を関数で定義する
// グローバルよりローカル登録の方がよく使われる。
var component = {
  data: function(){
    return {
      number: 12,
      name: 'たなか',
    }
  },
  template : '<p>いいね{{number}}{{name}}<button @click="increment">+1</button></p>',
  methods: {
    increment: function() {
      return this.number += 1
    }
  }
}

new Vue({
  el: "#app1",
})

new Vue({
  el: "#app2",
  // ローカル登録の呼び出し方法
  components: {
    'my-component' :component
  },
})