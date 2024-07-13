-- AlterTable
ALTER TABLE "ToDo" ADD COLUMN     "userEmail" TEXT;

-- CreateIndex
CREATE INDEX "ToDo_userEmail_idx" ON "ToDo"("userEmail");

-- AddForeignKey
ALTER TABLE "ToDo" ADD CONSTRAINT "ToDo_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE SET NULL ON UPDATE CASCADE;
