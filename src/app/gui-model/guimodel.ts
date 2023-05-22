export class GuiModel {
    /* HINWEIS: Texte sind in der Datei ../example-translation-service.ts definiert.
    Erscheinen Texte in {}, so kann die Übersetzung in example-translation-service.ts definiert werden
    */
  
    private _guiModel = {
      application: {
        title: "Sukhnaaz Singh Friend Tracker (FS2023)",
        formList: [
          {
            id: "FriendForm",
            title: "Friend",
            url: "/friend",
            formFieldList: [
              {
                id: "familyName",
                type: "text",
                name: "FamilyName",
                width: 1,
              },
              {
                id: "firstName",
                type: "text",
                name: "FirstName",
                width: 1,
              },
              {
                id: "nickname",
                type: "text",
                name: "Nickname",
                width: 2,
              },
              {
                id: "birthdate",
                type: "date",
                name: "Birthday",
                width: 2,
              },
              {
                id: "location",
                type: "autocomplete",
                name: "Location",
                url: "/location",
                form: "LocationForm",
                width: 2,
                required: true,
              },
              {
                id: "group",
                type: "autocomplete",
                name: "Group",
                url: "/group",
                form: "GroupForm",
                width: 2,
                required: true,
              },
              {
                id: "comment",
                type: "text",
                name: "Comments",
                width: 2,
                height: 4,
                maxLength: 5000,
              },
              {
                type: "deleteButton",
                name: "Delete",
              },
              {
                type: "cancelButton",
                name: "Cancel",
              },
              {
                type: "okButton",
                name: "Ok",
              },
            ],
          },
          {
            id: "LocationForm",
            title: "Location",
            url: "/location",
            formFieldList: [
              {
                id: "name",
                type: "text",
                name: "LocationName",
                width: 2,
                required: true,
              },
              {
                id: "comment",
                type: "text",
                name: "Comments",
                width: 2,
              },
              {
                type: "deleteButton",
                name: "Delete",
              },
              {
                type: "cancelButton",
                name: "Cancel",
              },
              {
                type: "okButton",
                name: "Ok",
              },
            ],
          },
          {
            id: "GroupForm",
            title: "Group",
            url: "/group",
            formFieldList: [
              {
                id: "name",
                type: "text",
                name: "GroupName",
                width: 2,
                required: true,
              },
              {
                id: "creationDate",
                type: "date",
                name: "CreationDate",
                width: 2,
              },
              {
                id: "comment",
                type: "text",
                name: "Comments",
                width: 2,
              },
              {
                type: "deleteButton",
                name: "Delete",
              },
              {
                type: "cancelButton",
                name: "Cancel",
              },
              {
                type: "okButton",
                name: "Ok",
              },
            ],
          },
          {
            id: "AddActivityForm",
            title: "Activity",
            url: "/friend/:friendKey/activity",
            formFieldList: [
              {
                id: "activity",
                type: "autocomplete",
                name: "Activity",
                url: "/activity",
                defaultKey: "activityKey",
                readonly: true,
                form: "ActivitiesForm",
                width: 2,
              },
              {
                type: "deleteButton",
                name: "Delete",
              },
              {
                type: "cancelButton",
                name: "Cancel",
              },
              {
                type: "okButton",
                name: "Ok",
              },
            ],
          },
          {
            id: "ActivitiesForm",
            title: "Activity",
            url: "/activity",
            formFieldList: [
              {
                id: "name",
                type: "text",
                name: "Name",
                width: 2,
                required: true,
              },
              {
                id: "location",
                type: "autocomplete",
                name: "Location",
                url: "/location",
                form: "LocationForm",
                width: 2,
                required: true,
              },
              {
                id: "date",
                type: "date",
                name: "Date",
                width: 2,
              },
              {
                id: "comment",
                type: "text",
                name: "Comments",
                width: 2,
                height: 4,
                maxLength: 5000,
              },
              {
                type: "deleteButton",
                name: "Delete",
              },
              {
                type: "cancelButton",
                name: "Cancel",
              },
              {
                type: "okButton",
                name: "Ok",
              },
            ],
          },
        ],
        pageList: [
          {
            id: "mainmenu",
            name: "MainMenu",
            elementList: [
              {
                type: "button",
                name: "Friends",
                icon: "fa-user",
                color: "blue",
                page: "friendspage",
              },
              {
                type: "button",
                name: "Location",
                icon: "fa-cubes",
                color: "yellow",
                page: "locationspage",
              },
              {
                type: "button",
                name: "Activities",
                icon: "fa-battery-three-quarters",
                color: "red",
                page: "activitypage",
              },
              {
                type: "button",
                name: "Groups",
                icon: "fa-weixin",
                color: "wisteria",
                page: "groupspage",
              },
            ],
          },
          {
            id: "friendspage",
            elementList: [
              {
                type: "backbutton",
              },
              {
                type: "newButton",
                name: "NewFriend",
                icon: "fa-user",
                color: "green",
                form: {
                  form: "FriendForm",
                },
              },
              {
                type: "list",
                icon: "fa-user",
                color: "blue",
                search: true,
                url: "/friend",
                page: "friendsdetailpage",
              },
            ],
          },
          {
            id: "locationspage",
            elementList: [
              {
                type: "backbutton",
              },
              {
                type: "newButton",
                name: "NewLocation",
                icon: "fa-home",
                color: "green",
                width: 2,
                form: {
                  form: "LocationForm",
                },
              },
              {
                type: "list",
                icon: "fa-home",
                color: "blue",
                search: true,
                url: "/location",
                form: {
                  form: "LocationForm",
                },
              },
            ],
          },
          {
            id: "groupspage",
            elementList: [
              {
                type: "backbutton",
              },
              {
                type: "newButton",
                name: "NewGroup",
                icon: "fa-weixin",
                color: "green",
                form: {
                  form: "GroupForm",
                },
              },
              {
                type: "list",
                icon: "fa-weixin",
                color: "wisteria",
                search: true,
                url: "/group",
                form: {
                  form: "GroupForm",
                },
              },
            ],
          },
          {
            id: "activitypage",
            elementList: [
              {
                type: "backbutton",
              },
              {
                type: "newButton",
                name: "NewActivity",
                icon: "fa-weixin",
                color: "red",
                form: {
                  form: "ActivitiesForm",
                },
              },
              {
                type: "list",
                icon: "fa-weixin",
                color: "wisteria",
                search: true,
                url: "/activity",
                page: "activitydetailpage",
              },
            ],
          },
          {
            id: "friendsdetailpage",
            elementList: [
              {
                type: "backbutton",
              },
              {
                type: "button",
                name: "Edit User",
                icon: "fa-user",
                color: "blue",
                form: {
                  form: "FriendForm",
                },
              },
              {
                type: "newButton",
                name: "NewActivity",
                icon: "fa-calendar",
                color: "orange",
                form: {
                  form: "AddActivityForm",
                },
              },
              {
                type: "list",
                icon: "fa-user",
                color: "blue",
                search: true,
                url: "/friend/:friendKey/activity",
                form: {
                  form: "ActivitiesForm",
                },
              },
            ],
          },
          {
            id: "activitydetailpage",
            elementList: [
              {
                type: "backbutton",
              },
              {
                type: "newButton",
                name: "EditActivity",
                icon: "fa-calendar-days",
                color: "black",
                form: {
                  form: "AddActivityForm",
                },
              },
              {
                type: "list",
                icon: "fa-user",
                color: "blue",
                search: true,
                url: "/activity/:activityKey/friend",
                page: "friendsdetailpage",
              },
            ],
          },
        ],
      },
    };
  
    get guiModel() {
      return this._guiModel;
    }
  }  