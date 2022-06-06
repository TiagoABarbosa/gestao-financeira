-- CreateTable
CREATE TABLE "TableArea" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "category" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "TableArea_pkey" PRIMARY KEY ("id")
);
