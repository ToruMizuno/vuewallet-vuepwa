// TypeScriptを認識させるため、型定義させるファイルを新しく作る
declare module "*.vue" {
  import Vue from 'vue'
  export default Vue
}

// 追加
// TypeScriptにした場合、importするライブラリをモジュール宣言しなければ使用できない
declare module "nem-sdk"
declare module "encoding-japanese"
declare module "vuetify"
declare module "vuetify/es5/util/colors"
declare module "vue2-toast"
declare module "vue-qriously"
declare module "vue-qrcode-reader"