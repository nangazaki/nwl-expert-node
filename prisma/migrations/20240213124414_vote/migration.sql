/*
  Warnings:

  - A unique constraint covering the columns `[sessionId,pollId]` on the table `Vote` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Vote_pollId_pollOptionId_key";

-- CreateIndex
CREATE UNIQUE INDEX "Vote_sessionId_pollId_key" ON "Vote"("sessionId", "pollId");
