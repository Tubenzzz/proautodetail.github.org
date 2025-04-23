import Image from "next/image"

interface LogoDisplayProps {
  size?: "sm" | "md" | "lg" | "xl"
  showText?: boolean
  className?: string
}

export function LogoDisplay({ size = "md", showText = false, className = "" }: LogoDisplayProps) {
  const sizes = {
    sm: { width: 32, height: 32 },
    md: { width: 48, height: 48 },
    lg: { width: 96, height: 96 },
    xl: { width: 160, height: 160 },
  }

  const { width, height } = sizes[size]

  return (
    <div className={`flex items-center ${className}`}>
      <div className={`relative h-[${height}px] w-[${width}px]`}>
        <Image src="/images/logo.png" alt="PROAUTOSPA Logo" width={width} height={height} className="object-contain" />
      </div>
      {showText && <span className="ml-2 font-bold text-xl">PROAUTOSPA</span>}
    </div>
  )
}
