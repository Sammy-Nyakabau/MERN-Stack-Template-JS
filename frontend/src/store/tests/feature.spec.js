
//Feature can be anything that is related to the application
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { loadFeature, addFeature } from "../feature";
import configureStore from "../configureStore";

describe("featureSlice", () => {
  let fakeAxios;
  let store;

  beforeEach(() => {
    fakeAxios = new MockAdapter(axios);
    store = configureStore();
  });

  const featureSlice = () => store.getState().entities.feature;

  const createState = () => ({
    entities: {
      feature: {
        list: []
      }
    }
  });

  describe("loading feature", () => {
    describe("if the feature exist in the cache", () => {
      it("they should not be fetched from the server again.", async () => {
        fakeAxios.onGet("/fature").reply(200, [{ id: 1 }]);

        await store.dispatch(loadFeature());
        await store.dispatch(loadFeature());

        expect(fakeAxios.history.get.length).toBe(1);
      });
    });

    describe("if the feature doesn't exist in the cache", () => {
      it("they should be fetched from the server and put in the store", async () => {
        fakeAxios.onGet("/feature").reply(200, [{ id: 1 }]);

        await store.dispatch(loadFeature());

        expect(featureSlice().list).toHaveLength(1);
      });

      describe("loading indicator", () => {
        it("should be true while fetching the feature", () => {
          fakeAxios.onGet("/feature").reply(() => {
            expect(featureSlice().loading).toBe(true);
            return [200, [{ id: 1 }]];
          });

          store.dispatch(loadFeature());
        });

        it("should be false after the feature has been fetched", async () => {
          fakeAxios.onGet("/feature").reply(200, [{ id: 1 }]);

          await store.dispatch(loadFeature());

          expect(featureSlice().loading).toBe(false);
        });

        it("should be false if the server returns an error", async () => {
          fakeAxios.onGet("/feature").reply(500);

          await store.dispatch(loadFeature());

          expect(featureSlice().loading).toBe(false);
        });
      });
    });
  });
});
