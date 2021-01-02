import { createSlice } from "@reduxjs/toolkit";
// import { createSelector } from "reselect";
import { apiCallBegan } from "./api";
import moment from "moment";

const slice = createSlice({
  name: "feature",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    featureRequested: (feature, action) => {
      feature.loading = true;
    },

    featureReceived: (feature, action) => {
      feature.list = action.payload;
      feature.loading = false;
      feature.lastFetch = Date.now();
    },

    featureRequestFailed: (feature, action) => {
      feature.loading = false;
    },

    // command - event
    // addfeature - featureAdded
    featureAdded: (features, action) => {
      features.list.push(action.payload);
    },
  },
});

export const {
  featureAdded,
  featuresReceived,
  featuresRequested,
  featuresRequestFailed,
} = slice.actions;
export default slice.reducer;

// Action Creators
const url = "/features";

export const loadfeatures = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.bugs;

  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  if (diffInMinutes < 10) return;

  return dispatch(
    apiCallBegan({
      url,
      onStart: featureRequested.type,
      onSuccess: featureReceived.type,
      onError: featureRequestFailed.type,
    })
  );
};

export const addFeature = (bug) =>
  apiCallBegan({
    url,
    method: "post",
    data: feature,
    onSuccess: featureAdded.type,
  });

// Selector

// Memoization
