<template>
  <BaseCard
    shape="curved"
    class="peer-checked:!border-primary-500 relative border-2 p-8 opacity-60 grayscale peer-checked:opacity-100 peer-checked:grayscale-0 peer-checked:[&_.child]:!opacity-100"
  >
    <div class="flex flex-col text-center">
      <client-only>
        <Vue3Lottie
          class="mx-auto max-w-[160px]"
          :animationData="image === 'sms' ? smsOtpJson : appOtpJson"
        />
      </client-only>
      <BaseHeading size="md" weight="medium">{{ title }}</BaseHeading>
      <BaseParagraph
        size="xs"
        lead="snug"
        class="text-muted-500 dark:text-muted-400"
      >
        {{ description }}
      </BaseParagraph>
    </div>
    <slot></slot>
  </BaseCard>
</template>

<script lang="ts" setup>
import smsOtpJson from '~~/assets/lottie/smsOtp.json'
import appOtpJson from '~~/assets/lottie/appOtp.json'

const props = defineProps({
  image: String,
  alt: String,
  title: String,
  description: String,
})
</script>
