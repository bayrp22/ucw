import * as React from "react"
import PhoneInput from "react-phone-number-input"
import "react-phone-number-input/style.css"
import "../../styles/phone-input.css"
import { cn } from "@/lib/utils"

export interface PhoneInputProps
  extends Omit<React.ComponentProps<typeof PhoneInput>, "className"> {
  className?: string
}

const PhoneInputComponent = React.forwardRef<
  React.ElementRef<typeof PhoneInput>,
  PhoneInputProps
>(({ className, ...props }, ref) => {
  return (
    <div className={cn("w-full", className)}>
      <PhoneInput
        ref={ref}
        {...props}
        className="phone-input-custom"
        placeholder="Enter phone number"
        defaultCountry="US"
        international
        withCountryCallingCode
      />
    </div>
  )
})

PhoneInputComponent.displayName = "PhoneInput"

export { PhoneInputComponent as PhoneInput } 