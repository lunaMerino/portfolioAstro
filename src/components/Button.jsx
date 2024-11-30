---
const { onClick, label } = Astro.props;
---

<button
  onclick={onClick}
  class="mt-2 bg-color3 text-whitish py-2 px-4 rounded hover:bg-blue-600"
>
  {label}
</button>
