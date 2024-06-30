import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from '../ui/button';

type TTodoFilterProps = {
  filter : string,
  setFilter : (filter:string)=>void
}

const TodoFilter = ({ filter, setFilter } : TTodoFilterProps) => {
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-primary-gradient text-lg ">Filter</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Filter by priority</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={filter} onValueChange={setFilter}>
          <DropdownMenuRadioItem value="All">All</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="High">High</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Medium">Medium</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Low">Low</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TodoFilter;