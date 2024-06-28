import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Private from "./Private";
import Public from "./Public";

import Login from "../Pages/Login";
import Registration from "../Pages/Registration";

import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import PrivateSelling from "../Pages/PrivateSelling";
import BuySell from "../Pages/BuySell";
import TransactionHistory from "../Pages/TransactionHistory";
import FlexibleStaking from "../Pages/FlexibleStaking";
import FixedStaking from "../Pages/FixedStaking";
import Burning from "../Pages/Burning";
import KycVerification from "../Pages/KycVerification";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Public>
              <Home />
            </Public>
          }
        />

        <Route path="dashboard">
          <Route
            path="home"
            element={
              <Public>
                <Dashboard />
              </Public>
            }
          />
          <Route
            path="private-selling"
            element={
              <Public>
                <PrivateSelling />
              </Public>
            }
          />
          <Route
            path="buy-sell"
            element={
              <Public>
                <BuySell />
              </Public>
            }
          />
          <Route
            path="history"
            element={
              <Public>
                <TransactionHistory />
              </Public>
            }
          />
          <Route
            path="flexible-staking"
            element={
              <Public>
                <FlexibleStaking />
              </Public>
            }
          />
          <Route
            path="fixed-staking"
            element={
              <Public>
                <FixedStaking />
              </Public>
            }
          />
          <Route
            path="burning"
            element={
              <Public>
                <Burning />
              </Public>
            }
          />
          <Route
            path="kyc"
            element={
              <Public>
                <KycVerification />
              </Public>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
