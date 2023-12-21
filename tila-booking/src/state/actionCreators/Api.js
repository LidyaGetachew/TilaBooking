import axios from "axios";
import { appUrl } from "../../AppURI";
import { userService } from "../../shared/auth/user-services";
import { collectionQueryBuilder } from "../../shared/collection-query/collection-query-builder";

export const roomApi = (url = appUrl + "Hotels") => {
  return {
    fetchAll: (request) =>
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + "/get-paged", {
          params: collectionQueryBuilder(request),
        }),
    fetchTrashHotels: (request) =>
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + "/get-trash-Hotels", {
          params: collectionQueryBuilder(request),
        }),
    fetchById: (id) =>
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + id),
    create: (newRecord) =>
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .post(url, newRecord),
    update: (id, updatedRecord) =>
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .put(url + "/" + id, updatedRecord),
    delete: (id) =>
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .delete(url + "/" + id),
    fetchRoom: () =>
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + "/get-name"),
    multiSoftDelete: (id) =>
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .post(url + "/multi-delete-soft", id),
    multiHardDelete: (id) =>
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .post(url + `/multi-delete-hard`, id),
    multiRecovery: (id) =>
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .post(url + "/multi-recevory", id),
    singleRecovery: (id) =>
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .post(url + `/single-recevory` + "/" + id),
  };
};
export const hotelApi = (url = appUrl + "Hotels") => {
  return {
    fetchAll: (request) =>
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + "/get-paged", {
          params: collectionQueryBuilder(request),
        }),
    fetchTrashHotels: (request) =>
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + "/get-trash-hotels", {
          params: collectionQueryBuilder(request),
        }),
    fetchById: (id) =>
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + id),
    create: (newRecord) =>
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .post(url, newRecord),
    update: (id, updatedRecord) =>
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .put(url + "/" + id, updatedRecord),
    delete: (id) =>
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .delete(url + "/" + id),
    fetchRoom: () =>
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + "/get-name"),
    multiSoftDelete: (id) =>
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .post(url + "/multi-delete-soft", id),
    multiHardDelete: (id) =>
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .post(url + `/multi-delete-hard`, id),
    multiRecovery: (id) =>
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .post(url + "/multi-recevory", id),
    singleRecovery: (id) =>
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .post(url + `/single-recevory` + "/" + id),
  };
};