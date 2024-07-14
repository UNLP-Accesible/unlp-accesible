import { useCallback, useState } from 'react';
import ColorPicker from 'react-best-gradient-color-picker';
import { StringInputProps, set, unset } from 'sanity';

const GradientColorPicker = (props: StringInputProps) => {
  const { onChange, value } = props;
  const [showColorPicker, setShowColorPicker] = useState(!!value);
  const handleChange = useCallback((value: string) => onChange(value ? set(value) : unset()), [onChange]);

  return (
    <>
      <div className="relative flex items-start">
        <div className="flex items-center">
          <input
            id="show-color-picker"
            name="showColorPicker"
            type="checkbox"
            checked={showColorPicker}
            onChange={() => {
              if (showColorPicker) {
                onChange(unset());
              }
              setShowColorPicker(!showColorPicker);
            }}
            className="h-3 w-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
          <div className="ml-3 text-xs leading-6">
            <label htmlFor="showColorPicker" className="font-medium bg-white">
              Add Background
            </label>
          </div>
        </div>
      </div>
      {showColorPicker && (
        <ColorPicker value={value} onChange={handleChange} hideAdvancedSliders hideColorGuide hideInputType />
      )}
    </>
  );
};

export default GradientColorPicker;
