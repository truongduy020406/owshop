import { Input } from 'antd';
import { Controller } from 'react-hook-form';

const InputField = ({ name, control, ...rest }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, formState }) => {
        const { errors } = formState;
        return (
          <div className="form-field">
            <Input status={errors[name] && 'error'} {...rest} {...field} />
            {errors[name] && (
              <p className="mb-3 text-sm text-red-500">
                {errors[name].message}
              </p>
            )}
          </div>
        );
      }}
    />
  );
};

export default InputField;
