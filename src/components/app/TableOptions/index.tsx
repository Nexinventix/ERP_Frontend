import React, { useCallback } from "react";
import { Menu, MoreHorizontal, MoreVertical } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

// Types
type TableOption = {
  label: string;
  onClick: () => void;
  hidden?: boolean;
  icon?: React.ReactNode; 
};

type TableOptionsProps = {
  variant?: "default" | "menu" | "dotsVertical";
  options: TableOption[];
};



const TableOptions = ({ variant = 'default', options }: TableOptionsProps) => {

  const renderIcon = () => {
    switch (variant) {
      case 'menu':
        return <Menu className="h-5 w-5" />;
      case 'dotsVertical':
        return <MoreVertical className="h-5 w-5" />;
      default:
        return <MoreHorizontal className="h-5 w-5" /> ;
    }
  };

  const renderOption = useCallback(
    (option: TableOption, index: number) => {
      if (option.hidden) return null;

      return (
        <button
          key={index}
          onClick={option.onClick}
          className="flex items-center py-2 gap-2 px-3 text-sm hover:bg-gray-100 w-full"
        >
          {option.icon && <span className="ml-2">{option.icon}</span>}
          <span>{option.label}</span>
          
        </button>
      );
    },
    []
  );

  return (
    <Popover >
      <PopoverTrigger  asChild>
      <button
          className={cn(
            "p-1 rounded-md hover:bg-gray-100",
            variant === "default" ? "text-black" : "text-gray-600"
          )}
        >
          {renderIcon()}
        </button>
      </PopoverTrigger>
      <PopoverContent 
        className="w-[200px] p-0" 
        side="left"
        sideOffset={5}
      >
        <div className="flex flex-col py-1.5">
        {options?.map(renderOption)}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default TableOptions;