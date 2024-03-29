import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearToken } from "../../redux/authSlice";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ isOpen, closeMenu }) {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navRef = useRef(null);

  useEffect(() => {
    const menu = navRef.current;
    if (isOpen) {
      menu.style.display = "block";
    }
  }, [isOpen]);

  //  const handleToSignIn = () => {
  //    if (!token) {
  //      navigate("/signin");
  //    } else {
  //      navigate("/products");
  //    }
  //  };

  const handleSignOut = () => {
    dispatch(clearToken());
    window.location.reload();
    navigate("/");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          ref={navRef}
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 200 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed bg-white w-full h-screen overflow-hidden inset-0 z-50 px-5 py-5"
        >
          <button
            onClick={closeMenu}
            className="float-end font-fontPrimary font-bold uppercase hover:underline"
          >
            Close
          </button>
          <motion.ul
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="container-base w-full md:w-fit h-screen flex flex-col items-start justify-center gap-5"
          >
            {token && (
              <>
                <li>
                  <Link
                    to="/user-profile"
                    className="font-fontPrimary font-semibold text-5xl hover:underline"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cart"
                    className="font-fontPrimary font-semibold text-5xl hover:underline"
                  >
                    Keranjang
                  </Link>
                </li>
              </>
            )}
            <li>
              <Link
                to="/tentangkami"
                className="font-fontPrimary font-semibold text-5xl hover:underline"
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="font-fontPrimary font-semibold text-5xl hover:underline"
              >
                Produk
              </Link>
            </li>
            <li>
              <Link
                to="/promospesial"
                className="font-fontPrimary font-semibold text-5xl hover:underline"
              >
                Promo Spesial
              </Link>
            </li>
            <li>
              <Link
                to="/hubungikami"
                className="font-fontPrimary font-semibold text-5xl hover:underline"
              >
                Hubungi Kami
              </Link>
            </li>
            {!token && (
              <>
                <li>
                  <Link
                    to="/hubungikami"
                    className="font-fontPrimary font-semibold text-5xl hover:underline"
                  >
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signin"
                    className="font-fontPrimary font-semibold text-5xl hover:underline"
                  >
                    Sign In
                  </Link>
                </li>
              </>
            )}
            {token && (
              <li>
                <button
                  onClick={handleSignOut}
                  className="font-fontPrimary font-semibold text-5xl hover:underline"
                >
                  Sign Out
                </button>
              </li>
            )}
          </motion.ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

Navbar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
};
