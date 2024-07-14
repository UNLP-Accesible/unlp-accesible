import { forwardRef } from 'react';
import { StringInputProps } from 'sanity';
import { gradientTextColorOptions } from '@/app/constants/constants';

export const ColorDropdown = forwardRef((props: StringInputProps) => {
  const { elementProps, value } = props;
  return (
    <div className="flex flex-col gap-2">
      <label>Selected Option:</label>
      <span className={`h-3 w-auto bg-gradient-to-r inline-block ${value}`} />
      <select {...elementProps}>
        {gradientTextColorOptions.map((item, index) => (
          <option key={index} value={item.value}>
            {item.title}
          </option>
        ))}
      </select>
    </div>
  );
});

ColorDropdown.displayName = 'ColorDropdown';

export default ColorDropdown;
