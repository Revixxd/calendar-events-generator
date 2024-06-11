import {createEvents } from 'ics' 
import { EventAttributes, DateArray } from 'ics' 
import { CalendarEvent } from '../../components/calendar/calendar.type'

export async function generateICSFile(events: EventAttributes[], passedFilename?: string) {
    const filename = passedFilename ? passedFilename : 'exampleCalendarEvents.ics'
    const file = await new Promise((resolve, reject) => {
      createEvents(events, (error, value) => {
        if (error) {
          reject(error)
        }
  
        resolve(new File([value], filename, { type: 'text/calendar' }))
      })
    })
    const url = URL.createObjectURL(file as Blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = filename;
  
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  
    URL.revokeObjectURL(url);
}

export function mapToEventAttributes(event: CalendarEvent): EventAttributes {
    return {
        start: [event.start.getFullYear(), event.start.getMonth() + 1, event.start.getDate()],
        end: [event.end.getFullYear(), event.end.getMonth() + 1, event.end.getDate()],
    }
}