<template>
  <div class="min-h-screen flex flex-col bg-background text-foreground">
    <LayoutNavbar />

    <main class="flex-1">
      <slot />
    </main>

    <LayoutFooter />
  </div>
</template>
