"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check, LucideIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface SelectOption {
  value: string;
  label: string;
  description?: string;
  badge?: string;
  icon?: LucideIcon;
}

interface CustomSelectProps {
  label: string;
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function CustomSelect({
  label,
  options,
  value,
  onChange,
  placeholder = "Selecione uma opção",
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle keyboard escape
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen]);

  const handleSelect = (val: string) => {
    onChange(val);
    setIsOpen(false);
  };

  const SelectedIcon = selectedOption?.icon;

  return (
    <div className="relative" ref={containerRef}>
      <label className="block text-xs font-bold font-archivo text-grafite mb-1 uppercase tracking-wide">
        {label}
      </label>

      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`w-full px-3.5 py-2.5 rounded-[8px] bg-white border text-left flex items-center justify-between gap-2 text-xs transition-all cursor-pointer ${
          isOpen
            ? "border-grafite ring-1 ring-grafite/20 shadow-xs"
            : "border-aco-light hover:border-aco"
        }`}
      >
        <div className="flex items-center gap-2 truncate">
          {SelectedIcon && (
            <SelectedIcon className="w-4 h-4 text-laranja shrink-0" strokeWidth={1.5} />
          )}
          <span className={`truncate font-medium ${selectedOption ? "text-grafite" : "text-aco"}`}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          {selectedOption?.badge && (
            <span className="hidden sm:inline-block text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded bg-bancada border border-aco-light text-aco uppercase">
              {selectedOption.badge}
            </span>
          )}
        </div>

        <ChevronDown
          className={`w-4 h-4 text-aco shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-laranja" : ""
          }`}
          strokeWidth={1.5}
        />
      </button>

      {/* Animated Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute z-50 left-0 right-0 mt-1 bg-white border border-aco-light rounded-[8px] shadow-lg max-h-60 overflow-y-auto p-1.5 space-y-1"
            role="listbox"
          >
            {options.map((option) => {
              const isSelected = option.value === value;
              const Icon = option.icon;

              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  role="option"
                  aria-selected={isSelected}
                  className={`w-full p-2.5 rounded-[6px] text-left flex items-center justify-between gap-3 text-xs transition-colors cursor-pointer group ${
                    isSelected
                      ? "bg-laranja-light/50 text-grafite font-semibold border border-laranja/20"
                      : "text-grafite hover:bg-bancada"
                  }`}
                >
                  <div className="flex items-start gap-2.5 truncate">
                    {Icon && (
                      <div className={`p-1 rounded-[4px] mt-0.5 shrink-0 ${
                        isSelected ? "bg-laranja text-white" : "bg-bancada border border-aco-light text-aco group-hover:text-grafite"
                      }`}>
                        <Icon className="w-3.5 h-3.5" strokeWidth={1.5} />
                      </div>
                    )}
                    <div className="truncate">
                      <div className="flex items-center gap-2">
                        <span className="truncate">{option.label}</span>
                        {option.badge && (
                          <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-bancada border border-aco-light text-aco uppercase">
                            {option.badge}
                          </span>
                        )}
                      </div>
                      {option.description && (
                        <p className="text-[10px] text-aco font-normal truncate mt-0.5">
                          {option.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {isSelected && (
                    <Check className="w-4 h-4 text-laranja shrink-0" strokeWidth={2} />
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
