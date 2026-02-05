import { WorkDay } from '@/types/friend';

export function getWorkTimeLabel(workDays: WorkDay[]): string | null {
  if (!workDays || workDays.length === 0) return null;

  const openDays = workDays.filter(day => day.isOpen);

  if (openDays.length === 0) {
    return 'Closed';
  }

   if (openDays.length === 7) {
    return 'Day and night';
  }

  const dayWithTime = openDays.find(day => day.from && day.to);

  if (dayWithTime) {
    return `${dayWithTime.from} - ${dayWithTime.to}`;
  }

  return null;
}