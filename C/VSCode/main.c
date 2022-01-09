#include <stdio.h>

#define DAC_OPT 0x0000 // normal mode

#define RADAR_SAW_PERIOD_MS 30
#define RADAR_SAMPLE_PERIOD_MS 10

#define RADAR_MAX_DAC_STEPS 3750
#define RADAR_MIN_DAC_STEPS 0

#define RADAR_ADC_DELAY_MS 2

#define SECOND_IN_MS 1000

#define DAC_OPT 0x0000 // normal mode

int main() {
  u_int32_t timer3A_load = (80e6 / ((RADAR_MAX_DAC_STEPS - RADAR_MIN_DAC_STEPS) * SECOND_IN_MS / RADAR_SAW_PERIOD_MS));
  printf("Period: %d\n", timer3A_load);

  // for (size_t i = 0; i < 3750; i++) {
  //   u_int16_t saw_tooth_cnt = i;
  //   u_int16_t res = (DAC_OPT | saw_tooth_cnt << 2);

  //   printf("Res: %i\n", res);
  // }
}