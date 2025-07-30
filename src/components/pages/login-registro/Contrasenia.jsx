import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";

function Contrasenia({ value, onChange, onBlur, name }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="position-relative">
      <input
        type={showPassword ? "text" : "text"}
        inputMode="text"
        name={name}
        id="password"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className="form-control"
        style={{ WebkitTextSecurity: showPassword ? "none" : "disc" }}
        autoComplete="current-password"
        placeholder="Crea una contraseña"
      />

      <button
        type="button"
        className="btn position-absolute top-50 end-0 translate-middle-y me-2 p-0 border-0"
        onClick={() => setShowPassword((prev) => !prev)}
        tabIndex={-1}
      >
        <i
          className={`bi ${
            showPassword
              ? "bi-eye-fill text-white"
              : "bi-eye-slash-fill text-white"
          }`}
        />
      </button>
    </div>
  );
}

export default Contrasenia;
