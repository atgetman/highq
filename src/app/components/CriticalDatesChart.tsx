import React from 'react';

// Define event types with colors
const eventTypes = [
  { name: 'Break notice', color: '#0A4E75' },
  { name: 'Rent review', color: '#3E8E7A' },
  { name: 'Lease expiry', color: '#94D1C2' },
  { name: 'Consent / other', color: '#5B9BD5' },
];

// Property data with events
const propertyData = [
  { 
    name: 'City Centre Office', 
    events: [
      { type: 'Break notice', date: 1 },
      { type: 'Rent review', date: 10 }
    ]
  },
  { 
    name: 'Innovation Centre', 
    events: [
      { type: 'Break notice', date: 2.5 }
    ]
  },
  { 
    name: 'Next plc', 
    events: [
      { type: 'Break notice', date: 4 }
    ]
  },
  { 
    name: 'Barclays', 
    events: [
      { type: 'Rent review', date: 5 }
    ]
  },
  { 
    name: 'Hiscox Insurance', 
    events: [
      { type: 'Rent review', date: 5.5 }
    ]
  },
  { 
    name: 'Riverside BP', 
    events: [
      { type: 'Rent review', date: 7 }
    ]
  },
  { 
    name: 'Quayside Tower', 
    events: [
      { type: 'Lease expiry', date: 8.5 }
    ]
  },
  { 
    name: 'Hargreaves Lansdown', 
    events: [
      { type: 'Consent / other', date: 0.5 },
      { type: 'Lease expiry', date: 11 }
    ]
  },
  { 
    name: 'Network Rail', 
    events: [
      { type: 'Consent / other', date: 1.5 },
      { type: 'Lease expiry', date: 12 }
    ]
  },
];

const dateLabels = [
  { value: 0, label: 'Apr 26' },
  { value: 3, label: 'Jul 26' },
  { value: 6, label: 'Oct 26' },
  { value: 9, label: 'Jan 27' },
  { value: 12, label: 'Apr 27' },
];

// Function to calculate the actual date from the timeline position
const calculateDate = (dateValue: number): string => {
  const startDate = new Date(2026, 3, 10); // Apr 10, 2026 (months are 0-indexed)
  const monthsToAdd = dateValue;
  const resultDate = new Date(startDate);
  resultDate.setMonth(resultDate.getMonth() + monthsToAdd);
  
  const day = resultDate.getDate();
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = monthNames[resultDate.getMonth()];
  const year = resultDate.getFullYear();
  
  return `${day} ${month} ${year}`;
};

export function CriticalDatesChart() {
  const maxDate = 12;
  const [hoveredEvent, setHoveredEvent] = React.useState<{ property: string; type: string; date: number; x: number; y: number } | null>(null);
  
  const getEventColor = (eventType: string) => {
    return eventTypes.find(t => t.name === eventType)?.color || '#000';
  };

  return (
    <div className="w-full min-w-0 flex flex-col h-full min-h-[400px]">
      <div className="mb-4">
        <h2 className="text-[#212223] text-[20px] font-['Clario:Medium',sans-serif] leading-[1.2]">
          Critical dates — next 24 months
        </h2>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
        {eventTypes.map((type) => (
          <div key={type.name} className="flex items-center gap-2 whitespace-nowrap">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: type.color }}
            />
            <span className="text-[#212223] text-[14px] font-['Source_Sans_3:Regular',sans-serif]">
              {type.name}
            </span>
          </div>
        ))}
      </div>

      {/* Custom Timeline Chart */}
      <div className="w-full relative">
        {/* Property rows */}
        <div className="space-y-3">
          {propertyData.map((property, index) => (
            <div key={index} className="relative">
              {/* Property name */}
              <div className="flex items-center">
                <div className="w-[180px] text-right pr-4">
                  <span className="text-[#212223] text-[14px] font-['Source_Sans_3:Regular',sans-serif]">
                    {property.name}
                  </span>
                </div>
                
                {/* Timeline container */}
                <div className="flex-1 relative h-[1px] bg-[#E5E5E5]">
                  {/* Event dots */}
                  {property.events.map((event, eventIndex) => {
                    const position = (event.date / maxDate) * 100;
                    return (
                      <div
                        key={eventIndex}
                        className="absolute w-3 h-3 rounded-full -top-[5px] cursor-pointer"
                        style={{
                          left: `${position}%`,
                          backgroundColor: getEventColor(event.type),
                          transform: 'translateX(-50%)',
                        }}
                        onMouseEnter={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          setHoveredEvent({ 
                            property: property.name, 
                            type: event.type, 
                            date: event.date,
                            x: rect.left + rect.width / 2,
                            y: rect.top
                          });
                        }}
                        onMouseLeave={() => setHoveredEvent(null)}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tooltip */}
        {hoveredEvent && (
          <div 
            className="fixed bg-white border border-[#E5E5E5] rounded-lg shadow-lg p-3 pointer-events-none z-50"
            style={{
              left: `${hoveredEvent.x}px`,
              top: `${hoveredEvent.y - 8}px`,
              transform: 'translate(-50%, -100%)',
            }}
          >
            <p className="text-[#212223] text-[15px] font-bold mb-1 whitespace-nowrap" style={{ fontFamily: 'Source Sans 3, sans-serif', fontWeight: 700 }}>
              {calculateDate(hoveredEvent.date)}
            </p>
            <p className="text-[#212223] text-[15px] whitespace-nowrap" style={{ fontFamily: 'Source Sans 3, sans-serif', fontWeight: 400 }}>
              {hoveredEvent.property}: {hoveredEvent.type}
            </p>
          </div>
        )}

        {/* Date labels at bottom */}
        <div className="relative mt-6 ml-[180px]">
          <div className="relative h-6">
            {dateLabels.map((date) => {
              const position = (date.value / maxDate) * 100;
              return (
                <div
                  key={date.value}
                  className="absolute whitespace-nowrap"
                  style={{
                    left: `${position}%`,
                    transform: 'translateX(-50%)'
                  }}
                >
                  <span className="text-[#666666] text-[13px] font-['Source_Sans_3:Regular',sans-serif]">
                    {date.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}