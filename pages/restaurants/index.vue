<template>
  <div>
    <Html>
      <Head>
        <Title> Top 50 restaurants </Title>
        <Meta name="description" content="this is my cool restaurants page" />
      </Head>
    </Html>
    <NuxtLayout name="custom">
      <div class="container mx-auto px-10">
        <RestaurantTable />
      </div>
    </NuxtLayout>
  </div>
</template>