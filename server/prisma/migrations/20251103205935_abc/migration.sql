/*
  Warnings:

  - You are about to drop the column `target` on the `Verification` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Verification` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Verification` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[identifier]` on the table `Verification` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[identifier,token]` on the table `Verification` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `identifier` to the `Verification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Verification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `Verification` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."Verification_token_key";

-- AlterTable
ALTER TABLE "Verification" DROP COLUMN "target",
DROP COLUMN "type",
DROP COLUMN "userId",
ADD COLUMN     "identifier" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "value" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Verification_identifier_key" ON "Verification"("identifier");

-- CreateIndex
CREATE UNIQUE INDEX "Verification_identifier_token_key" ON "Verification"("identifier", "token");
