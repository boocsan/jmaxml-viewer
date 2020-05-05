<template>
  <div class="loading">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      style="margin: auto; background: none; display: block; shape-rendering: auto;"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      class="loading-svg"
    >
      <g transform="rotate(0 50 50)">
        <rect x="46.5" y="24" rx="3.5" ry="6" width="7" height="12" fill="#333333">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.9166666666666666s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(30 50 50)">
        <rect x="46.5" y="24" rx="3.5" ry="6" width="7" height="12" fill="#333333">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.8333333333333334s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(60 50 50)">
        <rect x="46.5" y="24" rx="3.5" ry="6" width="7" height="12" fill="#333333">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.75s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(90 50 50)">
        <rect x="46.5" y="24" rx="3.5" ry="6" width="7" height="12" fill="#333333">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.6666666666666666s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(120 50 50)">
        <rect x="46.5" y="24" rx="3.5" ry="6" width="7" height="12" fill="#333333">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.5833333333333334s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(150 50 50)">
        <rect x="46.5" y="24" rx="3.5" ry="6" width="7" height="12" fill="#333333">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.5s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(180 50 50)">
        <rect x="46.5" y="24" rx="3.5" ry="6" width="7" height="12" fill="#333333">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.4166666666666667s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(210 50 50)">
        <rect x="46.5" y="24" rx="3.5" ry="6" width="7" height="12" fill="#333333">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.3333333333333333s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(240 50 50)">
        <rect x="46.5" y="24" rx="3.5" ry="6" width="7" height="12" fill="#333333">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.25s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(270 50 50)">
        <rect x="46.5" y="24" rx="3.5" ry="6" width="7" height="12" fill="#333333">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.16666666666666666s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(300 50 50)">
        <rect x="46.5" y="24" rx="3.5" ry="6" width="7" height="12" fill="#333333">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.08333333333333333s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(330 50 50)">
        <rect x="46.5" y="24" rx="3.5" ry="6" width="7" height="12" fill="#333333">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="0s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
    </svg>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  name: "Loading"
})
</script>

<style lang="scss" scoped>
.loading {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  &-svg {
    width: 50%;
    max-width: 200px;
    height: 50%;
    max-height: 200px;
  }
}
</style>
