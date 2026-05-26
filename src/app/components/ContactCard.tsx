import React from 'react';

interface ContactCardProps {
  name: string;
  company: string;
  role: string;
  location: string;
  email: string;
  imageUrl?: string;
  initials?: string;
}

export function ContactCard({ name, company, role, location, email, imageUrl, initials }: ContactCardProps) {
  return (
    <div className="bg-white border border-[#E5E5E5] rounded-lg p-6">
      <div className="flex items-start gap-4">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-16 h-16 rounded-full object-cover flex-shrink-0"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-[#4DB299] flex items-center justify-center text-white flex-shrink-0">
            {initials}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-[#212223]">{name}</h3>
          <p className="text-[#212223]">{company}</p>
          <p className="italic text-[#7A7A7A]">{role}</p>
          <p className="text-[#7A7A7A] mt-2">{location}</p>
          <a href={`mailto:${email}`} className="text-[#0062C4] hover:text-[#054688] break-all">
            {email}
          </a>
        </div>
      </div>
    </div>
  );
}