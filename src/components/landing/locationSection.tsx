import React from 'react'

const LocationSection = () => {
  return (
    <div className="py-6">
        {
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5553.188177560406!2d85.32166649126998!3d27.693915070525588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1752565506546!5m2!1sen!2snp"
            width="100%"
            height="450"
            loading="lazy"
          />
        }
      </div>
  )
}

export default LocationSection;