/*
  Warnings:

  - You are about to drop the column `blockId` on the `Text` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "_BlockToText" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_BlockToText_A_fkey" FOREIGN KEY ("A") REFERENCES "Block" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_BlockToText_B_fkey" FOREIGN KEY ("B") REFERENCES "Text" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Text" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titulo" TEXT NOT NULL,
    "texto" TEXT NOT NULL
);
INSERT INTO "new_Text" ("id", "texto", "titulo") SELECT "id", "texto", "titulo" FROM "Text";
DROP TABLE "Text";
ALTER TABLE "new_Text" RENAME TO "Text";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_BlockToText_AB_unique" ON "_BlockToText"("A", "B");

-- CreateIndex
CREATE INDEX "_BlockToText_B_index" ON "_BlockToText"("B");
