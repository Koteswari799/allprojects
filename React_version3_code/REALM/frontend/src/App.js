import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
  Link,
  useNavigate
} from "react-router-dom";



import "./App.css";
import { useContext,useEffect } from "react";
import { AuthContext } from "./context/authContext";
import Register from "./components/Register";
import AddProfile from "./components/AddProfile";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile"; // Import EditProfile component here
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import ForgotPassword from "./components/ForgotPassword";
import VerifyOtp from "./components/VerifyOtp";
import PasswordReset from "./components/PasswordReset";
import HoverPlayer from "./components/HoverPlayer";
import HoverPlayer1 from "./components/HoverPlayer1";
import RealmLogo from "./components/RealmLogo";
import FileUpload from "./components/FileUpload";
import EditAuth from "./components/EditAuth";
import Restrict from "./components/Restrict";
import Home from "./components/Home";
import Movie from "./components/Movie";
import Search from "./components/Search";
import PinPage from "./components/PinPage";
import VideoPlayer from "./components/VideoPlayer";
import WatchlistVideos from "./components/WatchlistVideos";
import ChildWatchlistVideos from "./components/ChildWatchlistVideos";
import Movies from "./components/Movies";
import GenrePage from "./components/GenrePage";
import Admin from "./components/Admin";
import ChildHome from "./components/ChildHome";
import ChildMovies from "./components/ChildMovies";
import ChildSearch from "./components/ChildSearch";
import Test from "./components/Test";
import ChildMovie from "./components/ChildMovie";
import ChildHoverVideo from "./components/ChildHoverVideo";
import ChildHoverplayer from "./components/ChildHoverplayer";


function App() {
  const { currentUser } = useContext(AuthContext);

  const Layout = () => {
    return (
      <div className="light">
        <div>
          <Outlet />
        </div>
      </div>
    );
  };
  

  

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const RedirectIfLoggedIn = ({ children }) => {
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (currentUser) {
        // Check if the user's email is "uploader@gmail.com"
        if (currentUser.email === "uploader@gmail.com") {
          // Redirect to the admin page if the user is logged in and trying to access login
          navigate('/admin');
        } else {
          // Redirect to the home page for other users
          navigate('/home');
        }
      }
    }, [currentUser, navigate]);
  
    return children; // Render the children (login page) when the user is not logged in
  };
  
  



  const router = createBrowserRouter([
    {
      path: "/login",
      element: (
        <RedirectIfLoggedIn>
          <Login />
        </RedirectIfLoggedIn>
      ),
    },
    {
      path: "/test",
      element: <Test />,
    },
    {
      path: '/pin/:profileId/',
      element: <PinPage />,
    },
    {
      path: "/register",
      element: (
        <RedirectIfLoggedIn>
          <Register />
        </RedirectIfLoggedIn>
      ),
    },
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/realmlogo",
      element: <RealmLogo />,
    },
    {
      path: "/forgotpassword",
      element: (
        <RedirectIfLoggedIn>
          <ForgotPassword />
        </RedirectIfLoggedIn>
      ),
    },

   



    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/profiles",
          element: <Profile />,
        },
        {
          path: "/hoverplayer",
          element: <HoverPlayer />,
        },
        {
          path: "/hoverPlayer1",
          element: <HoverPlayer1 />,
        },

        
        {
          path: "/ChildHoverVideo",
          element: <ChildHoverVideo />,
        },

        {
          path: "/watchlist",
          element: <WatchlistVideos />,
        },
        {
          path: "/Childwatchlist",
          element: <ChildWatchlistVideos />,
        },


        {
          path: "/Home",
          element: <Home/>,
        },
        
       
        {
          path: "/VerifyOtp",
          element: <VerifyOtp />, // Include EditProfile component for editing profiles
        },
        

        {
          path: "/PasswordReset",
          element: (
            <RedirectIfLoggedIn>
              <PasswordReset />
            </RedirectIfLoggedIn>
          ),
        },
        {
          path: "/Moviespage",
          element: <Movies />, // Include EditProfile component for editing profiles
        },
    
        {
          path: "/movie/:id",
          element: <Movie />, // Include EditProfile component for editing profiles
        },
        {
          path: "/upload",
          element: <FileUpload />,
        },
        {
          path: "/search",
          element: <Search />,
        },
        {
          path: "/genre/:genreId",
          element: <GenrePage />, // Include EditProfile component for editing profiles
        },
        {
          path: "/ChildHome",
          element: <ChildHome/>,
        },
        {
          path: "/childmovie/:id",
          element: <ChildMovie/>,
        },
    

        {
          path: "/add-profile",
          element: <AddProfile />,
        },
        {
          path: "/restrict",
          element: <Restrict />,
        },
        {
          path: "/admin",
          element: <Admin />,
        },
        {
          path: "/edit-profile/:profileId",
          element: <EditProfile />, // Include EditProfile component for editing profiles
        },
        {
          path: "/Childhome/:profileId",
          element: <ChildHome/>,
        },
        {
          path: "/edit-auth/:profileId",
          element: <EditAuth />,
        },
        {
          path: "/ChildMovies",
          element: <ChildMovies/>,
        },
        {
          path: "/hoverplayer1",
          element: <ChildHoverplayer/>,
        },
        {
          path: "/ChildSearch",
          element: <ChildSearch/>,
        },
        {
          path: "/video/:videoPath",
          element: <VideoPlayer />, 
        },
        
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
