import { useState, useRef } from "react"
import { motion, AnimatePresence } from "motion/react"
import {
  Layers,
  LayoutGrid,
  FileDown,
  RefreshCw,
  ScanText,
  Settings,
} from "lucide-react"

interface ActionTile {
  icon: React.ElementType
  title: string
  subtitle: string
  iconBg: string
  iconColor: string
  cardBg: string
  cardBorder: string
}

const topActions: ActionTile[] = [
  {
    icon: Layers,
    title: "Merge PDFs",
    subtitle: "Combine multiple files into one document.",
    iconBg: "bg-fuchsia-300/90",
    iconColor: "text-fuchsia-900",
    cardBg: "bg-gradient-to-br from-fuchsia-900/90 via-purple-900/80 to-purple-950/90",
    cardBorder: "border-fuchsia-700/30",
  },
  {
    icon: LayoutGrid,
    title: "Split PDFs",
    subtitle: "Extract pages or split large documents.",
    iconBg: "bg-sky-300/90",
    iconColor: "text-sky-900",
    cardBg: "bg-gradient-to-br from-sky-900/90 via-blue-900/80 to-slate-900/90",
    cardBorder: "border-sky-700/30",
  },
]

const bottomActions: ActionTile[] = [
  {
    icon: FileDown,
    title: "Compress PDFs",
    subtitle: "Shrink file size for sharing.",
    iconBg: "bg-amber-400/90",
    iconColor: "text-amber-900",
    cardBg: "bg-gradient-to-br from-amber-950/90 via-stone-900/90 to-neutral-950/90",
    cardBorder: "border-amber-800/20",
  },
  {
    icon: RefreshCw,
    title: "Convert PDFs",
    subtitle: "PDF <-> JPG/PNG and back.",
    iconBg: "bg-emerald-400/90",
    iconColor: "text-emerald-900",
    cardBg: "bg-gradient-to-br from-emerald-950/90 via-green-950/80 to-neutral-950/90",
    cardBorder: "border-emerald-800/20",
  },
  {
    icon: ScanText,
    title: "OCR (Searchable)",
    subtitle: "Make scans text-searchable and editable.",
    iconBg: "bg-rose-400/90",
    iconColor: "text-rose-900",
    cardBg: "bg-gradient-to-br from-rose-950/90 via-red-950/80 to-neutral-950/90",
    cardBorder: "border-rose-800/20",
  },
]

const LargeTile = ({ action }: { action: ActionTile }) => {
  const Icon = action.icon
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative flex items-center gap-4 p-4 rounded-2xl
        ${action.cardBg}
        border ${action.cardBorder}
        text-left w-full
        transition-all duration-200
        hover:brightness-110
        shadow-lg shadow-black/20
      `}
    >
      <div
        className={`w-12 h-12 rounded-xl ${action.iconBg} flex items-center justify-center flex-shrink-0 shadow-md`}
      >
        <Icon className={`w-6 h-6 ${action.iconColor}`} strokeWidth={2.5} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[15px] font-semibold text-white mb-0.5">
          {action.title}
        </p>
        <p className="text-[12px] text-white/60 leading-tight">
          {action.subtitle}
        </p>
      </div>
    </motion.button>
  )
}

const SmallTile = ({ action }: { action: ActionTile }) => {
  const Icon = action.icon
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative flex items-center gap-3 p-3 rounded-2xl
        ${action.cardBg}
        border ${action.cardBorder}
        text-left w-full
        transition-all duration-200
        hover:brightness-110
        shadow-lg shadow-black/20
      `}
    >
      <div
        className={`w-10 h-10 rounded-xl ${action.iconBg} flex items-center justify-center flex-shrink-0 shadow-md`}
      >
        <Icon className={`w-5 h-5 ${action.iconColor}`} strokeWidth={2.5} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[13px] font-semibold text-white mb-0.5">
          {action.title}
        </p>
        <p className="text-[11px] text-white/60 leading-tight">
          {action.subtitle}
        </p>
      </div>
    </motion.button>
  )
}

export function MacNotch() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isDragOver, setIsDragOver] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setIsExpanded(true)
  }

  const handleMouseLeave = () => {
    if (isDragOver) return
    
    timeoutRef.current = setTimeout(() => {
      setIsExpanded(false)
    }, 100)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setIsDragOver(true)
    setIsExpanded(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    const rect = containerRef.current?.getBoundingClientRect()
    if (rect) {
      const { clientX, clientY } = e
      if (
        clientX >= rect.left &&
        clientX <= rect.right &&
        clientY >= rect.top &&
        clientY <= rect.bottom
      ) {
        return
      }
    }
    
    setIsDragOver(false)
    timeoutRef.current = setTimeout(() => {
      setIsExpanded(false)
    }, 100)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragOver(false)
    const files = Array.from(e.dataTransfer.files)
    console.log("Dropped files:", files)
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div
        ref={containerRef}
        className="pointer-events-auto"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <motion.div
          className="relative overflow-hidden cursor-pointer"
          animate={{
            width: isExpanded ? 680 : 185,
            height: isExpanded ? 295 : 32,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          style={{
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomLeftRadius: isExpanded ? 24 : 16,
            borderBottomRightRadius: isExpanded ? 24 : 16,
          }}
        >
          {/* Background */}
          <div 
            className={`
              absolute inset-0
              bg-neutral-950/95
              backdrop-blur-xl
              transition-shadow duration-300
              ${isExpanded ? "shadow-[0_8px_40px_-8px_rgba(0,0,0,0.6)]" : "shadow-[0_4px_24px_-4px_rgba(0,0,0,0.3)]"}
              ${isDragOver ? "ring-2 ring-blue-500/50" : ""}
            `}
            style={{
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              borderBottomLeftRadius: isExpanded ? 24 : 16,
              borderBottomRightRadius: isExpanded ? 24 : 16,
            }}
          />
          
          {/* Collapsed State */}
          <AnimatePresence mode="wait">
            {!isExpanded && (
              <motion.div
                key="collapsed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
                className="absolute inset-0 flex items-center justify-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-neutral-600" />
                <div className="w-8 h-2 rounded-full bg-neutral-700" />
                <div className="w-2 h-2 rounded-full bg-neutral-600" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Expanded State */}
          <AnimatePresence mode="wait">
            {isExpanded && (
              <motion.div
                key="expanded"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15, delay: 0.05 }}
                className="relative h-full flex flex-col p-5 z-10"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-lg font-bold text-white">
                      PDF Toolkit
                    </h2>
                    <p className="text-[13px] text-neutral-400">
                      Quick actions for common PDF tasks.
                    </p>
                  </div>
                  <button className="p-2 rounded-xl hover:bg-white/10 transition-colors">
                    <Settings className="w-5 h-5 text-neutral-400" />
                  </button>
                </div>

                {/* Action Grid */}
                <div className="flex flex-col gap-3">
                  {/* Row 1 - Two larger tiles */}
                  <div className="grid grid-cols-2 gap-3">
                    {topActions.map((action) => (
                      <LargeTile key={action.title} action={action} />
                    ))}
                  </div>
                  {/* Row 2 - Three compact tiles */}
                  <div className="grid grid-cols-3 gap-3">
                    {bottomActions.map((action) => (
                      <SmallTile key={action.title} action={action} />
                    ))}
                  </div>
                </div>

                {/* Drop zone indicator */}
                <AnimatePresence>
                  {isDragOver && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-4 border-2 border-dashed border-blue-500/50 rounded-2xl flex items-center justify-center bg-blue-500/10 pointer-events-none z-20"
                    >
                      <p className="text-blue-400 font-medium">Drop PDF here</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}

export default MacNotch
