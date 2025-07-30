<template>
  <Input v-bind="$attrs" type="number" class="input-phone-country">
    <template #prefix>
      <a-select
        class="input-phone-country-select"
        dropdown-class-name="ant-select-dropdown-design"
        :dropdown-match-select-width="false"
        :value="countryValue"
        :options="countries"
        :show-arrow="false"
        show-search
        :filter-option="filterOption"
        @change="handleChangeCountry"
      >
        <template #option="{ label, name }">
          <div>{{ label }} {{ name }}</div>
        </template>
      </a-select>
    </template>
  </Input>
</template>

<script>
  import Input from './Input.vue'
  import allCountries from '@/utils/allCountries'
  import { convertVN } from '@/utils/common'
  import { Select as ASelect } from 'ant-design-vue'
  import 'ant-design-vue/lib/select/style/css'

  export default {
    components: {
      Input,
      ASelect,
    },
    props: {
      countryValue: {
        type: String,
        default: 'VN',
      },
    },
    emits: ['changeCountry', 'update:countryValue'],
    setup() {
      return { allCountries }
    },
    computed: {
      countries() {
        return this.allCountries.map((country) => {
          return {
            ...country,
            value: country.iso2,
            label: `+ ${country.dialCode}`,
          }
        })
      },
    },
    methods: {
      handleChangeCountry(value, option) {
        this.$emit('update:countryValue', value)
        this.$emit('changeCountry', value, option)
      },
      filterOption(input, option) {
        input = convertVN(input.toLowerCase())
        const label = convertVN(option.label.toLowerCase() + ' ' + option.name.toLowerCase())
        return label.indexOf(input) >= 0
      },
    },
  }
</script>

<style lang="scss" scoped></style>
