migrate((db) => {
  const collection = new Collection({
    "id": "o4lvnmkirhe9ph8",
    "created": "2023-05-02 07:24:48.846Z",
    "updated": "2023-05-02 07:24:48.846Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "essqhapj",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("o4lvnmkirhe9ph8");

  return dao.deleteCollection(collection);
})
